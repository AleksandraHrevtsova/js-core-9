const switchBtn = document.getElementById('theme-switcher');
// console.log(switchBtn);
switchBtn.addEventListener('change', switchTheme);
document.addEventListener('DOMContentLoaded', setThemeFromStorage);

const body = document.querySelector('body');
const keyForLocalStorage = 'theme-key';
const lightThemeClass = 'light-theme';

function switchTheme(event){
    event.target.checked
      ? addTheme(body, keyForLocalStorage, lightThemeClass)
      : removeTheme(body, keyForLocalStorage, lightThemeClass);
}

function addTheme (node, keyLS, themeClass){
    node.classList.add(themeClass);
    localStorage.setItem(keyLS, themeClass);
}

function removeTheme(node, keyLS, themeClass) {
    node.classList.remove(themeClass);
    localStorage.removeItem(keyLS);
}

function setThemeFromStorage(){
  const theme = localStorage.getItem('theme-key');
    theme === 'light-theme'
      ? switchThemeByStorage(true, 'add', body, lightThemeClass)
      : switchThemeByStorage(false, 'remove', body, lightThemeClass);
}

function switchThemeByStorage(checked, action, node, themeClass) {
    switchBtn.checked = checked;
    action === 'add' ? node.classList.add(themeClass) : node.classList.remove(themeClass);
}


// switchBtn.removeEventListener('change', switchTheme);

// // ============================ 
// switchBtn.addEventListener('change', (event)=>{
//     // console.log(event);
//     // console.dir(event.target);
//     // console.log('checked:', event.target.checked);
//     // console.log(document.querySelector('body').classList);
//     if (event.target.checked) {
//         document.querySelector('body').classList.add('light-theme');
//         localStorage.setItem('theme-key', 'light-theme');
//     }else{
//         document.querySelector('body').classList.remove('light-theme');
//         localStorage.removeItem('theme-key');
//     }
// })

// document.addEventListener('DOMContentLoaded', ()=>{
//     const theme = localStorage.getItem('theme-key');
//     // console.log("theme from LS:", theme);
//     if(theme === 'light-theme'){
//         document.querySelector('body').classList.add('light-theme');
//         switchBtn.checked = true;
//     } else {
//         document.querySelector('body').classList.remove('light-theme');
//         switchBtn.checked = false;
//     }
//     // console.log("checked after reload:", switchBtn.checked);
// })
// // ============================ 
