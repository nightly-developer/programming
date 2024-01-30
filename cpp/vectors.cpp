/* we don't need to define the size of vectors 
vectors are dynamic i.e they can expand & shrink on demand*/
#include<iostream>
#include<vector>
using namespace std;
int main () {
	vector<int>  vector1 = {1,3,65};
	cout << vector1[2] <<endl;
}
