<script>
    import { onMount } from "svelte";
    import "../../styles/leaderboard.css";
    import { scores } from "../../stores/scores";
    import "../../styles/app.scss";


    let loading = true;

    const fetchTopScores = async () => {
        try {
            const response = await fetch(
                "http://localhost:8000/api/top-scores",
                {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                }
            );

            if (response.ok) {
                const data = await response.json();
                scores.set(data);
            } else {
                console.error(
                    "Failed to fetch top scores",
                    response.status,
                    response.statusText
                );
            }
        } catch (error) {
            console.error("An error occurred:", error);
        } finally {
            loading = false;
        }
    };

    onMount(async () => {
        await fetchTopScores();
    });

    // style leaderboard end
</script>

<link
    rel="stylesheet"
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
/>

{#if loading}
    <div class="loader-layout">
        <div class="loader" />
        <h1>Wait Master 🙏🏻</h1>
    </div>
{:else}
    <div class="containers">
        <main class="table">
            <section class="table__header">
                <a href="/"><i class="bx bx-arrow-back" /></a>
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
                        {#each $scores as score, i}
                            <tr>
                                <td> {i + 1} </td>
                                {#if i === 0}
                                    <td>{score.name} 👑</td>
                                {:else}
                                    <td>{score.name}</td>
                                {/if}
                                <td> {score.wpm_score} WPM </td>
                                <td> {score.accuracy} % </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </section>
        </main>
    </div>
{/if}

<style>
    .loader {
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid #234c67;
        width: 90px;
        height: 90px;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
    }

    .loader-layout {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        flex-direction: column;
        gap: 2rem;
    }

    h1 {
        font-family: "Lexend Deca", sans-serif;
        font-size: 1.8rem;
        color: hsl(220 20% 80%);
        letter-spacing: 2px;
    }

    /* Safari */
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
