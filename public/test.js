const ewq = ['qu', 'wf', 'eh', 'iu', 'tb']

const test = () => {
    return (
        <ul>
            {
                ewq.map(rew => {
                        return <li>{rew}</li>
                    }
                )
            }
        </ul>
    );
}

let gu = {
    si: 'da',
    cf: 'qe'
}
let uj = {
    cf: 'do',
    co: 'db',
    ...gu,
}
gu = {
    ...uj,
    cf: 'wh',
    co: 'nd'
}
console.log(gu.si)
console.log(uj.cf)
console.log(gu.co)