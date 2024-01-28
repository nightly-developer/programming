#include <iostream>
#include <string>
using namespace std;

struct Passanger {
	string name;
	int age;
	bool frequent;
	};

Passanger *add_passanger (string name, int age, bool frequent) {
	Passanger *customer = new Passanger;
	customer -> name = name;
	customer -> age = age;
	customer -> frequent = frequent;
	return customer;
}
void display (Passanger *customer) {
	cout<<customer->name<<endl;
	cout<<customer->age<<endl;
	cout<<customer->frequent<<endl;
}

int main (){
	Passanger *customer_pointer = add_passanger("vaibhav",21,true);
	display(customer_pointer);
	return 0;
}
