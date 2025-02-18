<script lang="ts">
  export let onAuthenticated: () => void;

  let password = "";
  const correctPassword = "extravaganza";

  function checkPassword() {
    if (password === correctPassword) {
      localStorage.setItem("isAuthenticated", "true");
      onAuthenticated();
    } else {
      alert("incorrect password! maybe ace sent you a typo whoops");
      password = "";
    }
  }
</script>

<div class="password-container">
  <h2>enter password</h2>
  <input
    type="password"
    class="answer-input"
    bind:value={password}
    placeholder="password"
    on:keypress={(e) => e.key === "Enter" && checkPassword()}
  />
  <button on:click={checkPassword} class="submit-button">submit</button>
</div>

<style>
  .password-container {
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 2rem 4rem;
    border-radius: 8px;
    border: solid var(--red-accent) 0.8rem;
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

  .answer-input {
    font-family: "Darumadrop";
    font-size: 1rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    border: solid var(--red-accent);
  }

  .answer-input:focus {
    font-family: "Darumadrop";
    padding: 0.5rem;
    border-radius: 4px;
    border: solid var(--red-accent);
    outline: none;
  }
  .submit-button {
    background-color: var(--red-accent);
    font-size: 1rem;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    margin-left: 1rem;
  }

  .submit-button:hover {
    cursor: pointer;
  }

  .submit-button:active {
    background-color: #c45151;
  }
</style>
