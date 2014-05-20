#pragma strict

var laserToShoot:Rigidbody;

function Start () {

}

function Update () {

	if (Input.GetKeyDown(KeyCode.B))
	{
		Instantiate(laserToShoot,transform.position,Quaternion.identity);
	}

}