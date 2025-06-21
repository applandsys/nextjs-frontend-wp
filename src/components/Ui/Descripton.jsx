const Description = ({ description }) => {
    return (
        <div>
            <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    );
};

export default Description;