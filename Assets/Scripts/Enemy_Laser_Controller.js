#pragma strict

var speedOfLaser:int;

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag == "Player")
	{
		Player_Controller.lives --;
		
		Destroy(this.gameObject);
		
		if (Player_Controller.lives <= 0)
		{	
			Application.LoadLevel("Menu");
				
			Destroy(other.gameObject);
		}
	}
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

function Start () {

}


function Update () {
	transform.Translate(Vector3.left * speedOfLaser * Time.deltaTime);
}