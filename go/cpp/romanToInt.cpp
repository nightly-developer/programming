#include<iostream>
#include<map>
using namespace std;
// Hashtable implement
int romanToInt(string s) {
map<char,int> roman = {{'I',1},{'V',5},{'X',10},{'L',50},{'C',100},{'D',500},{'M',1000}};
int integer = 0;
for (int i=1;i<=s.size();i++){
	if (roman[s[i-1]] < roman[s[i]]){
		integer += roman[s[i]] - roman[s[i-1]];
		i++;}
	else {
		integer += roman[s[i-1]];}
}
return integer;
}

int main(){
string rome;
cin>>rome;
cout<<romanToInt(rome)<<endl;
}
