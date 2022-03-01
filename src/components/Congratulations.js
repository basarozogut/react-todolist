export default function Congratulations(props) {
    if (!props.visible) {
        return null;
    }

    return (<div className="congratulations">Congratulations! You have completed all of the tasks!</div>);
}