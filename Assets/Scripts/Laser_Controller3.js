#pragma strict

var speedOfLaser:int;

function Start () {

}

function Update () {
	transform.Translate(Vector3.right * speedOfLaser * Time.deltaTime);
}

function OnTriggerEnter(objectHit:Collider)
{
	if (objectHit.gameObject.tag == "enemy_1" || objectHit.gameObject.tag == "enemy_2" || objectHit.gameObject.tag == "enemy_3")
	{	
		Player_Controller.score++; 
		Player_Controller2.score++;
		Player_Controller3.score++;
		
		Destroy(objectHit.gameObject);
		
		Destroy(this.gameObject);
	}
}

