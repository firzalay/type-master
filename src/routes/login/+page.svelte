<script>
    import { goto } from "$app/navigation";

    let name = "";
    let password = "";


    
    const submit = async () => {
        await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
                name,
                password,
            }),
        });
        
        await goto("/");
    };
</script>

<form on:submit|preventDefault={submit} action="">
    <h1>Login Form</h1>
    <div class="main">
        <div class="name">
            <label for="">Name</label>
            <input bind:value={name} type="name" name="" id="" />
        </div>

        <div class="password">
            <label for="">Password</label>
            <input bind:value={password} type="password" name="" id="" />
        </div>
    </div>

    <p>Dont have an account? <a href="/register">Register First!</a></p>

    <button type="submit">Submit</button>
</form>

<style>
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        margin: 20px 0;
    }

    .main {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    button {
        margin-top: 20px;
        background-color: black;
        color: white;
        padding: 10px;
        border-radius: 5px;
        opacity: 1;
    }

    p {
        margin-top: 20px;
    }

    p a {
        color: white;
    }
</style>
