const eraseButtons = document.querySelectorAll('.erase-button');

eraseButtons.forEach(button => {
  button.addEventListener('click', async (event) => {
    console.log(event.currentTarget.dataset.id);
    //first I check if the target of removal exists
    const projectId = event.currentTarget.dataset.id;
    console.log("Element clicked: ", projectId);

    //then i start the deleting process, after knowing that id exists
    const removeId = document.getElementById(projectId);

    if (removeId) {
      removeId.delete();
      console.log(`Element ${projectId} removed!`)
    }
    else {
      console.log(`Failed to remove ${projectId}`)
    }


  })
})