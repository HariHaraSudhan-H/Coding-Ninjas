public class lootHouses {
    public static int maxMoneyLootedHelper(int[] houses,int startIndex,int[] ans){
		if(startIndex>=houses.length)
			return 0;
		if(ans[startIndex]>0)
			return ans[startIndex];
		int max = Math.max(maxMoneyLootedHelper(houses,startIndex+2,ans)+houses[startIndex],maxMoneyLootedHelper(houses,startIndex+1,ans));
		ans[startIndex]=max;
		return max;
	}
	public static int maxMoneyLooted(int[] houses) {
		//Your code goes here
		return maxMoneyLootedHelper(houses,0,new int[houses.length]);
	}
    public static void main(String[] args) {
        int[] input ={5,5,100,2,200};
        System.out.println(maxMoneyLooted(input));
    }
}
