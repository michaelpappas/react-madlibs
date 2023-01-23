

function Story(story) {
  console.log(story);
  return (
    <div className="story-div">
      {story.story[0]?.story && <><p>{story.story[0].story}</p>
        <button >Reset</button></>}
    </div>
  );
}
export default Story;