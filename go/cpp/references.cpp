#include <iostream>
using namespace std;
int  function (int &ref) {
	ref += 5;
	cout<<"address of val is: "<<&ref<<endl;
	return ref;
}

int main () {
	int val = 5;
	int &ref = val;
	cout<<"address of val is: "<<&ref<<endl;
	cout<<ref<<endl;
	cout<<function(val)<<endl;
	return 0;
}
