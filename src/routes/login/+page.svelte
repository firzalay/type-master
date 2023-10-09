<script>
    import { goto } from "$app/navigation";

    let name = "";
    let password = "";
    let errorMessage = "";

    const submit = async () => {
        if (!name || !password) {
            errorMessage = "Silakan isi semua bidang!";
            return; // Jangan melanjutkan jika ada kesalahan
        }

        // Menghapus pesan kesalahan jika validasi berhasil
        errorMessage = "";

        try {
            const response = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    name,
                    password,
                }),
            });

            if (response.ok) {
                await goto("/");
                // Jika login berhasil, navigasi ke halaman lain di sini (contoh: "/dashboard")
            } else {
                // Tangani kesalahan dari server (misalnya, login gagal)
                errorMessage = "Login gagal. Periksa kembali nama dan kata sandi Anda.";
            }
        } catch (error) {
            errorMessage = "Terjadi kesalahan saat mencoba login.";
        }
    };
</script>

<form on:submit|preventDefault={submit} action="">
    <h1>Login Form</h1>
    <div class="main">
        <div class="name">
            <label for="name">Name</label>
            <input bind:value={name} type="text" name="name" id="name" />
        </div>

        <div class="password">
            <label for="password">Password</label>
            <input bind:value={password} type="password" name="password" id="password" />
        </div>
    </div>

    <p>Dont have an account? <a href="/register">Register First!</a></p>

    <button type="submit">Submit</button>

    {#if errorMessage}
        <p class="error">{errorMessage}</p>
    {/if}
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

    .error {
        color: red;
        font-size: 14px;
    }
</style>
