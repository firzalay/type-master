<script>
    import { onMount } from "svelte";
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
</script>

<div>
    <ul>
        {#each $scores as score}
            <li>{score.name} : {score.wpm_score} WPM</li>
        {/each}
    </ul>
</div>
