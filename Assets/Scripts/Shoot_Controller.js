#pragma strict

var AudioFile:AudioClip;

function Start () {

}

//when the user hits the spacebar button, sound will play
function Update () {
	if (Input.GetKeyDown(KeyCode.V))
	{
		audio.clip = AudioFile;
		audio.Play();
	}
		
}