const saveContent = () => {
    const content = document.getElementById('editor').innerHTML
    console.log(content)
}

const insertContent = () => {
    const content = 'sdfasdfsd<div><br></div><div>sdfs</div><div><br></div><div><br></div><div><b>sdflsdkfj</b></div>'
    document.getElementById('editor').innerHTML = content
}