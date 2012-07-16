#pragma strict

var speed = 0.1;
var maxspeed = 0.01;

var camera_acceleration = 1.0;
var camera_deceleration = 1.0;

var camera_max_speed = 1.0;

private var x : float;
private var y : float;

function Start () {

}

function Update () {

	var x_add = Input.GetAxis("Mouse X");
	var y_add = Input.GetAxis("Mouse Y");
	
	
	x = x_add * 45 * camera_acceleration;
	y = y_add * 80 * camera_acceleration;
	
	x = Mathf.Clamp(x,-45,45);
	y = Mathf.Clamp(y,-80,80);
	
	var rotateTo = transform.rotation*Quaternion.Euler(y,0,x);
	
	//x = Mathf.Clamp(x,-camera_max_speed,camera_max_speed);
	//y = Mathf.Clamp(y,-camera_max_speed,camera_max_speed);
	
	/*var rotateTo = transform.rotation;
	rotateTo.eulerAngles.x += y*90;
	rotateTo.eulerAngles.z += x*90;
	
	rotateTo = transform.rotation * rotateTo;
	*/
	//transform.rotation = Quaternion.Slerp(transform.rotation,rotateTo,Time.deltaTime*speed);
	
	transform.Rotate(y,0,x);

	transform.position -= transform.forward * maxspeed;

}
