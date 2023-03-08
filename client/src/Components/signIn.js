
function SignIn() {

const handleSignIn = () => console.log("Signed in");
const handleCreate = () => console.log("Created account");

    return (
<div className="signInDiv">
    <div className="userSignIn">
        <div id="inputs">
            <input id="usernameSignIn" type="text" placeholder="Username"></input>
            <div id="spacingDiv"></div>
            <input id="passwordSignIn" type="text" placeholder="Password"></input>
            <div id="spacingDiv"></div>
            <button id="signInBtn" onClick={handleSignIn}>Sign In</button>
            <div id="spacingDiv"></div>
            <p id="createButton" onClick={handleCreate}>Create an account</p>
        </div>
    </div>
</div>
)
}

export default SignIn;