

function CreateNewUser({hideCreate,setHideCreate}){

const handleCreate = () => setHideCreate(!hideCreate)

    return (
        <div id="newUserContainer" hidden={hideCreate}>
            <h1 id="header">Create an account</h1>
            <div id="spacingDiv"></div>
            <input type="text" placeholder="Username"></input>
            <div id="spacingDiv"></div>
            <input type="text" placeholder="Password"></input>
            <div id="spacingDiv"></div>
            <input type="text" placeholder="Confirm Password"></input>
            <div id="spacingDiv"></div>
            <button onClick={handleCreate}>Create Account</button>
        </div>
    )
};

export default CreateNewUser