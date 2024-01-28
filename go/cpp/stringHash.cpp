
#include<iostream>
#include<string>
using namespace std;
 
struct node {
	int data;
	struct node* next;
};

 void stringHash(string str){
	 cout<<"original string: "<<str<<endl;
	 hash<string> hash;
	 cout<<"Hash value of string is: "<<hash(str)<<endl;
}

int main(){
	string str = "HelloWorld";
//	stringHash(str);
	
	struct node* head = new node;
	head->data = 5;
	return 0;
}