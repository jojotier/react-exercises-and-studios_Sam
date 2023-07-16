 function HobbyLinks(){
    const hobbyHeader = "Hobbies";
    const hobbies = ["https://archiveofourown.org/users/sam_roulette/pseuds/sam_roulette","https://www.webtoons.com/en/challenge/beasts-without-burden/list?title_no=793267"]
    return (<div>
        <h3>{hobbyHeader}</h3>
        <p><a href={hobbies[0]}>My ao3</a></p>
        <p><a href={hobbies[1]}>My webcomic</a></p>
    </div>)
}
export default HobbyLinks;