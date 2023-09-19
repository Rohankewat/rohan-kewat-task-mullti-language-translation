function DropDownlist(props) {
    return (
        <div>
            <select onChange={props.onChange}>
                <option>Select Language</option>
                <option value={'eng'}>English</option>
                <option value={'jap'}>Japanese</option>
                <option value={'ko'}>Korean</option>
                <option value={'hi'}>Hindi</option>
            </select>
        </div>
    )
}

export default DropDownlist;