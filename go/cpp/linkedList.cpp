#include<iostream>
using namespace std;
//creating node class
class node{
	public:
	int data; //declaring variable data
	node* next;//creating a pointer next of data-type node
//defining a constructor
	node (int val){
//		cout<<"constructor val: "<<val<<endl;
		data=val;//assigning value val to variabl data
		next=NULL;//next points to NULL
	}
};
void insertAtHead(node* &head, int val){//double pointer is created
	node* n = new node(val);
	n->next = head;
	head = n;
}
//inserting data to LL
void insertAtTail(node* &head, int val){
	node* n = new node(val);//creating a pointer n of data-type node and it points to location of newly created node
//	cout<<"data of n: "<<n->data<<" location of next node: "<<n->next<<endl;//prints data of current & location of next node of pointed node
	node* temp=head;//creating pointer for itorating LL and it points to first node
	if (head==NULL){
	//	when length of LL  is 0	
		head=n;//creating first new node of LL
		return;//IMP to counter  Segmentation fault
	}
	while (temp->next!=NULL){
	//	iterating till reach the end of LL
		temp=temp->next;//pointer temp will point to location of next node
	}
	temp->next=n;//linking newly created node to our LL
}
bool search(node* head, int item){
	node* temp = head;
	while (temp != NULL){
		if (temp->data == item){
			return true;
		}
		temp=temp->next;
	}
	return false;
};	
void display(node* head){
/* this function will display entire Linked-List by iterating on it and grabbing data of each node */	
	node* temp=head;
	while(temp!=NULL){
		cout<<temp->data<<"-->";
		temp=temp->next; 
	}
	cout<<"NULL";
}

int main(){
node* head=NULL;//pointer of node data-type
insertAtTail(head,1);
insertAtTail(head,2);
insertAtTail(head,3);
insertAtHead(head,4);
display(head);
cout<<endl;
cout<<search(head,6)<<endl;


}
