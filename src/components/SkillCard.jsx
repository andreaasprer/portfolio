const SkillCard = ({img, description, text}) => {
    return (
        <div className="skillcard">
            <img src={img} alt={description} />
            <p>{text}</p>
        </div>
    )
}

export default SkillCard