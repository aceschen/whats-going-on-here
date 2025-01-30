<script lang="ts">
  export let onAuthenticated: () => void;

  let password = "";
  const correctPassword = "mypassword"; // Change this to your actual password

  function checkPassword() {
    if (password === correctPassword) {
      localStorage.setItem("isAuthenticated", "true"); // Store authentication status
      onAuthenticated();
    } else {
      alert("Incorrect password!");
      password = "";
    }
  }
</script>

<div class="password-container">
  <h2>Enter Password to Access</h2>
  <input
    type="password"
    bind:value={password}
    placeholder="Enter password"
    on:keypress={(e) => e.key === "Enter" && checkPassword()}
  />
  <button on:click={checkPassword}>Submit</button>
</div>

<style>
  .password-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 10px;
  }
  input {
    padding: 8px;
    font-size: 1rem;
  }
  button {
    padding: 8px 16px;
    font-size: 1rem;
    cursor: pointer;
  }
</style>
