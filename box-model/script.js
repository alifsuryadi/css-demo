const box = document.getElementById('box');
const marginSize = document.getElementById('marginSize');
const paddingSize = document.getElementById('paddingSize');
const borderSize = document.getElementById('borderSize');
const widthSize = document.getElementById('widthSize');
const heightSize = document.getElementById('heightSize');

function updateBoxStyle() {
    const marginValue = marginSize.value + 'px';
    const paddingValue = paddingSize.value + 'px';
    const borderValue = borderSize.value + 'px';
    const widthValue = widthSize.value + 'px';
    const heightValue = heightSize.value + 'px';

    box.style.margin = marginValue;
    box.style.padding = paddingValue;
    box.style.borderWidth = borderValue;
    box.style.width = widthValue;
    box.style.height = heightValue;
}

marginSize.addEventListener('input', updateBoxStyle);
paddingSize.addEventListener('input', updateBoxStyle);
borderSize.addEventListener('input', updateBoxStyle);
widthSize.addEventListener('input', updateBoxStyle);
heightSize.addEventListener('input', updateBoxStyle);


const boxSizingDropdown = document.getElementById('box-sizing');

box.style.boxSizing = boxSizingDropdown.value;
box.style.boxSizing = boxSizingDropdown.value;

boxSizingDropdown.addEventListener('change', (event) => {
    box.style.boxSizing = event.target.value;
  });