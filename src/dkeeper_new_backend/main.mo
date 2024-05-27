import Int "mo:base/Int";
import Debug "mo:base/Debug";
import Text "mo:base/Text";
import List "mo:base/List";
import Nat "mo:base/Nat";

actor Dkeeper {
  var currentVar : Int = 12;

  public func add(){
    currentVar += 10;
    Debug.print(debug_show(currentVar));
  };

  public type Note = {
    title:Text;
    content:Text;
  };

  stable var note:List.List<Note> = List.nil<Note>();

  //----------------------------------------//

  // STORING THE DATA.
  public func storeData(titleText:Text , contentText:Text) {
    var newNote:Note = {
      title = titleText;
      content = contentText;
    };
    note := List.push(newNote, note);
    Debug.print(debug_show(note));
  };
  //----------------------------------------//

  // RETREIVING DATA OR RELOADING THE DATA.
  public query func readData():async [Note]{
    var noteArr = List.toArray(note);
    return noteArr;
  };
  //----------------------------------------//

  // DELETING ITEM FROM AN ARRAY.
  public func removeData(index: Nat){
    var list1 = List.take(note, index);
    var list2 = List.drop(note, index + 1 );
    note := List.append(list1, list2);
  };
  //----------------------------------------//
}