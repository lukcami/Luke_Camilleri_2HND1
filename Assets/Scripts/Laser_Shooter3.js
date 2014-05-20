#pragma strict

var laserToShoot:Rigidbody;

function Start () {

}

function Update () {

	if (Input.GetKeyDown(KeyCode.N))
	{
		Instantiate(laserToShoot,transform.position,Quaternion.identity);
	}

}