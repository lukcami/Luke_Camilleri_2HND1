#pragma strict

var laserToShoot:Rigidbody;

function Start () {

}

function Update () {

	if (Input.GetKeyDown(KeyCode.V))
	{
		Instantiate(laserToShoot,transform.position,Quaternion.identity);
	}

}