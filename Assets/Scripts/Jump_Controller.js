#pragma strict

var AudioFile:AudioClip;

function Start () {

}

function Update () {
	if (Input.GetKeyDown("space"))
	{
		audio.clip = AudioFile;
		audio.Play();
	}
		
}