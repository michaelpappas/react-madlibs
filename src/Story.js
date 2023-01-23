
/** renders the story from Madlibs component
 *
 * props: story
 *        reset() - fn to reset story to intial values
 *
 * state: none
 */
function Story(story, reset) {

  return (

    < div className="story-div" >
      {
        story.story[0]?.story && <><p>{story.story[0].story}</p>
          <button onClick={reset} >Reset</button></>
      }
    </div >
  );
}
export default Story;