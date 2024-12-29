let sally = 'Sally Smith'
let mark = 'Mark Martin'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let robin = 'Robin Banks'
let aaron = 'Aaron D. Tyres'
let charlie = "Charlie Brown"
    const element = (
        <ul style={{'color':'blue', 'fontSize': '24px'}}>
            <li>{sally}</li>
            <li>{mark}</li>
            <li>{holly}</li>
            <li>{amol.toUpperCase()}</li>
            <li>{robin}</li>
            <li>{aaron}</li>
            <li>{charlie}</li>
        </ul>
    )
    ReactDOM.render(element, document.getElementById('content'))