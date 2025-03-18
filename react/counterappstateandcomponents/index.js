let state={
    count:0
};
function onbuttonclick(){
    state.count++;
    console.log(state.count);
    buttoncomponentrerender();
}

function buttoncomponentrerender(){
    document.getElementById('buttonparent').innerHTML="";
    const component=buttoncomponent(state.count);
    document.getElementById('buttonparent').appendChild(component);
}

function buttoncomponent(count){
    const button=document.createElement('button');
    button.innerText=`Clicked ${count} times`;
    button.setAttribute('onclick','onbuttonclick()');
    return button;
}
buttoncomponentrerender();