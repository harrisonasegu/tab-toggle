const tabButtons = document.querySelectorAll(".tabButton");
const tabSections = document.querySelectorAll(".tabSection")
const sectionZero = document.getElementById('sectionZero');
const sectionOne = document.getElementById('sectionOne');
const sectionTwo = document.getElementById('sectionTwo');
const refreshBtn = document.querySelector('.refreshBtn');
const firstBtn = document.getElementById('firstBtn');
const secondBtn = document.getElementById('secondBtn');
const thirdBtn = document.getElementById('thirdBtn');


const setActiveTabButton = (tabButtonsCollection, currentTabButtonClicked, currentTabButtonClickedIndex) => {
  const buttonClassList = Array.from(currentTabButtonClicked.classList)

  if (buttonClassList.includes('active')) {
    console.log(1234567);
    return
    // set background color on active tab button
    // tabButton.classList.add('active')

    // remove active class from sibling tab buttons
    // tabButtons.filter((siblingTabButton, siblingIndex) => {
    //   if (siblingIndex !== index) {
    //     // set background color on active tab button
    //     siblingTabButton.classList.remove('active')
    //   }
    // })
  } else {

    console.log(4488484); 
    // set background color on active tab button
    currentTabButtonClicked.classList.remove('active') 

    // remove active class from sibling tab buttons
    // tabButtonsCollection.filter((siblingTabButton, siblingIndex) => {
    //   if (siblingIndex !== index) {
    //     // set background color on active tab button
    //     siblingTabButton.classList.remove('active')
    //   }
    // })
  }
}

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener('click', () => {
    // check if button is active
    setActiveTabButton(tabButtons, tabButton, index)
    
    const currentTab = (tabButton, index);
    const curretSection = (tabSections[index]);

      // index 0---------------------------------
      if (currentTab === 0) {
        curretSection.style.display = 'block';
        // firstBtn.style.background = 'rgb(29, 173, 29)'
      }else {
        sectionZero.style.display = 'none'
        // firstBtn.style.background = 'none'
      }

        // index 1---------------------------------
        if (currentTab === 1) {
          curretSection.style.display = 'block'
          // secondBtn.style.background = 'rgb(29, 173, 29)'
        }else {
          sectionOne.style.display = 'none'
          // secondBtn.style.background = 'none'
        }

        // index 2---------------------------------
        if (currentTab === 2) {
          curretSection.style.display = 'block'
          // thirdBtn.style.background = 'rgb(29, 173, 29)'
        }else {
          sectionTwo.style.display = 'none'
          // thirdBtn.style.background = 'none'
        } 
    });
});

// refreshPage------------------------------
refreshBtn.addEventListener('click', refreshPage);

function refreshPage() {
  
  console.log(refreshBtn);
  window.location.reload();
}

