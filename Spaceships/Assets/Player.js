#pragma strict

function Start () {

}

function Update () {
	
	var camera_object = GameObject.Find("Spaceship Camera");
	
	var distanceVector = camera_object.transform.position-transform.position;
	
	var rotateTo = Quaternion.LookRotation(distanceVector,camera_object.transform.up);
	
	transform.rotation = Quaternion.RotateTowards(transform.rotation,rotateTo,10);

	transform.position += transform.forward*distanceVector.magnitude*0.1;
}