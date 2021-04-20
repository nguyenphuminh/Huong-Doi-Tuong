#include <iostream>

using namespace std;

class Car {
public:
    string tenxe;
    string mausac;
    Car(string tenxe, string mausac){
        this->tenxe = tenxe;
        this->mausac = mausac;
    }
    string dungxe(string mucdich){
        return this->tenxe + "\t dang dung xe de " + mucdich;
    }
};

int main(){
    Car toyota("toyota", "den");
    cout<<toyota.dungxe("do xang");
}