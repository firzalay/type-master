<script>
    import SvelteTypedJs from "svelte-typed-js";
    import { goto } from "$app/navigation";

    let name = "";
    let password = "";
    let errorMessage = "";

    const submit = async () => {
        if (!name || !password) {
            errorMessage = "Please fill in all fields!";
            return;
        }

        errorMessage = "";

        const isNameTaken = await checkNameAvailability(name);
        if (isNameTaken) {
            errorMessage = "Name is already taken. Please choose another name.";
            return;
        }

        const response = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                password,
            }),
        });

        if (response.ok) {
            await goto("/login");
        } else {
            errorMessage = "Registration failed. Please try again.";
        }
    };

    // Function to check if the name is already taken
    const checkNameAvailability = async (name) => {
        const response = await fetch(
            `http://localhost:8000/api/check-name?name=${name}`
        );
        const data = await response.json();
        return data.nameTaken;
    };
</script>

<div class="container" id="container">
    <div class="form-container sign-in">
        <form on:submit|preventDefault={submit}>
            <h1>Register Page</h1>
            <SvelteTypedJs
                strings={["Type Master"]}
                typeSpeed="10"
                backSpeed="10"
                loop="true"
            >
                <p class="typing-animation">
                    Become The Best <span class="typing" /> 👑
                </p>
            </SvelteTypedJs>
            <input bind:value={name} type="name" placeholder="Name" />
            <input
                bind:value={password}
                type="password"
                placeholder="Password"
            />
            {#if errorMessage}
                <div class="error">
                    <p class="error">{errorMessage}</p>
                </div>
            {/if}
            <button>Register</button>
            <div class="register-p">
                <p>
                    Already have an account? <a href="/login">Login Now!</a>
                </p>
            </div>
        </form>
    </div>
    <div class="toggle-container">
        <video playsinline autoplay muted loop>
            <source src="logos.mp4" type="video/mp4" />
        </video>
    </div>
</div>

<style>
    .container {
        font-family: "Lexand Deca", sans-serif;
    }

    .sign-in p {
        letter-spacing: 0.5px;
        padding: 20px 0;
        font-size: 20px;
        font-weight: 500;
        font-family: "Roboto Mono", monospace;
    }

    .sign-in button {
        background-color: #45346c;
        color: #e2e1e1;
        font-size: 12px;
        padding: 10px 45px;
        border: 1px solid transparent;
        border-radius: 8px;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin-top: 10px;
        cursor: pointer;
    }

    .container form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 40px;
        height: 100%;
    }

    .container input {
        background-color: #eee;
        border: none;
        margin: 8px 0;
        padding: 10px 15px;
        font-size: 13px;
        border-radius: 8px;
        width: 70%;
        outline: none;
    }

    .form-container {
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.6s ease-in-out;
    }

    .sign-in {
        left: 0;
        width: 50%;
        z-index: 2;
    }

    @keyframes move {
        0%,
        49.99% {
            opacity: 0;
            z-index: 1;
        }
        50%,
        100% {
            opacity: 1;
            z-index: 5;
        }
    }

    .toggle-container {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: all 0.6s ease-in-out;
        /* border-radius: 150px 0 0 100px; */
        z-index: 1000;
    }

    .sign-in h1 {
        color: white;
    }

    video {
        object-fit: cover;
        width: 50vw;
        height: 100vh;
        position: fixed;
    }

    .register-p p {
        font-family: "Lexend Deca", sans-serif;
        font-size: 16px;
    }

    .register-p a {
        color: white;
        text-decoration: none;
        font-weight: bold;
    }

    .error p {
        font-family: "Lexend Deca", sans-serif;
        margin: 10px 0;
        color: red;
        font-weight: 600;
    }

    .error p {
        color: red;
        font-size: 14px;
    }
</style>
