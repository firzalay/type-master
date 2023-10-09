<script>
    import { createEventDispatcher, onMount } from "svelte";
    import "../../styles/leaderboard.css";
    import { scores } from "../../stores/scores"; 
    const fetchTopScores = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/top-scores", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });

            if (response.ok) {
                const data = await response.json();
                scores.set(data);
            } else {
                console.error("Failed to fetch top scores", response.status, response.statusText);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    onMount(async () => {
        await fetchTopScores();
    });

    // style leaderboard end
</script>
<link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css">
<main class="table">
    <section class="table__header">
        <a href="/"><i class="bx bx-arrow-back"></i></a>
        <h1 class="title">The Master 👑</h1>
    </section>
    <section class="table__body">
        <table>
            <thead>
                <tr>
                    <th> No </th>
                    <th> Name </th>
                    <th> WPM </th>
                    <th> Accuracy</th>
                </tr>
            </thead>
            <tbody>
                {#each $scores as score}
                <tr>
                    <td> 1 </td>
                    <td>{ score.name }</td>
                    <td> { score.wpm_score } WPM </td>
                    <td> { score.accuracy } % </td>     
                </tr>
                {/each}
            </tbody>
        </table>
    </section>
</main>
