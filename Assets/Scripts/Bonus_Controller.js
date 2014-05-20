#pragma strict

static var score:int;

function OnTriggerExit(other:Collider)
	{
		if (other.gameObject.tag=="Player")
		{	
			Player_Controller.score +=5;
			Player_Controller2.score +=5;
			Player_Controller3.score +=5;
			
			renderer.material.color = Color.black;
			
			yield WaitForSeconds(1);
			
			Destroy(this.gameObject);
		}
	}

function Start () {

}

function Update () {

}