public class backspace {
    public static String backspaceSolution(String s){
        String outString="";
        for(int i=0;i<s.length();i++){
          if(s.charAt(i)=='#'){
            outString=outString.substring(0, outString.length()-1);
          }else{
            outString+=s.charAt(i);
          }
        }
        return outString;
      }
}
