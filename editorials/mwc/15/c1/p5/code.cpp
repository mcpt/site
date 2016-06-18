#include <iostream>
#include <vector>
using namespace std;

vector<int> cycle[10] = {{0}, {1}, {2, 4, 8, 6}, {3, 9, 7, 1}, {4, 6}, {5}, {6}, {7, 9, 3, 1}, {8, 4, 2, 6}, {9, 1}};

int main() {
    string A, B;
    cin >> A >> B;
    int c;
    long long int av = 0, bv = 0;
    for(int a = 0; a < A.size(); a++) {
        c = (tolower(A[a]) - 96) % 10;
        av += cycle[c][a % cycle[c].size()];
    }
    for(int b = 0; b < B.size(); b++) {
        c = (tolower(B[b]) - 96) % 10;
        bv += cycle[c][b % cycle[c].size()];
    }
    cout << (av - 1) % 10 + (bv - 1) % 10 + 2 << endl;
    return 0;
}