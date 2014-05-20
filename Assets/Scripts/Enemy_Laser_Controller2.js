#pragma strict

var speedOfLaser:int;

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag == "Player")
	{
		Player_Controller2.lives --;
		
		Destroy(this.gameObject);
		
		if (Player_Controller2.lives <= 0)
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