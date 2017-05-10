// =============================================================================
// Grammar functions
// =============================================================================

function godanConnector(verbType,sound) {
  var godan;
  switch(verbType) {
    case 'v1':
      switch(sound) {
        case 'あ': godan=''; break;
        case 'い': godan=''; break;
        case 'う': godan='る'; break;
        case 'え': godan=''; break;
        case 'お': godan='よ'; break;
      }
      break;
    case 'v5b':
      switch(sound) {
        case 'あ': godan='ば'; break;
        case 'い': godan='び'; break;
        case 'う': godan='ぶ'; break;
        case 'え': godan='べ'; break;
        case 'お': godan='ぼ'; break;
      }
      break;
    case 'v5g':
      switch(sound) {
        case 'あ': godan='が'; break;
        case 'い': godan='ぎ'; break;
        case 'う': godan='ぐ'; break;
        case 'え': godan='げ'; break;
        case 'お': godan='ご'; break;
      }
      break;
    case 'v5k':
      switch(sound) {
        case 'あ': godan='か'; break;
        case 'い': godan='き'; break;
        case 'う': godan='く'; break;
        case 'え': godan='け'; break;
        case 'お': godan='こ'; break;
      }
      break;
    case 'v5m':
      switch(sound) {
        case 'あ': godan='ま'; break;
        case 'い': godan='み'; break;
        case 'う': godan='む'; break;
        case 'え': godan='め'; break;
        case 'お': godan='も'; break;
      }
      break;
    case 'v5n':
      switch(sound) {
        case 'あ': godan='な'; break;
        case 'い': godan='に'; break;
        case 'う': godan='ぬ'; break;
        case 'え': godan='ね'; break;
        case 'お': godan='の'; break;
      }
      break;
    case 'v5r':
      switch(sound) {
        case 'あ': godan='ら'; break;
        case 'い': godan='り'; break;
        case 'う': godan='る'; break;
        case 'え': godan='れ'; break;
        case 'お': godan='ろ'; break;
      }
      break;
    case 'v5s':
      switch(sound) {
        case 'あ': godan='さ'; break;
        case 'い': godan='し'; break;
        case 'う': godan='す'; break;
        case 'え': godan='せ'; break;
        case 'お': godan='そ'; break;
      }
      break;
    case 'v5t':
      switch(sound) {
        case 'あ': godan='た'; break;
        case 'い': godan='ち'; break;
        case 'う': godan='つ'; break;
        case 'え': godan='て'; break;
        case 'お': godan='と'; break;
      }
      break;
    case 'v5u':
      switch(sound) {
        case 'あ': godan='わ'; break;
        case 'い': godan='い'; break;
        case 'う': godan='う'; break;
        case 'え': godan='え'; break;
        case 'お': godan='お'; break;
      }
      break;
    case 'vs-s':
      switch(sound) {
        case 'あ': godan=''; break;
        case 'い': godan='し'; break;
        case 'う': godan='する'; break;
        case 'え': godan=''; break;
        case 'お': godan='しよ'; break;
      }
      break;
  }
  return godan;
}

function teFormEnding(verbType) {
  switch(verbType) {
    case 'v1': return 'て';
    case 'v5b': return 'んで';
    case 'v5g': return 'いで';
    case 'v5k': return 'いて';
    case 'v5m': return 'んで';
    case 'v5n': return 'んで';
    case 'v5r': return 'って';
    case 'v5s': return 'して';
    case 'v5t': return 'って';
    case 'v5u': return 'って';
    case 'vs-s': return 'して';
    default: return '';
  }
}

function taFormEnding(verbType) {
  switch(verbType) {
    case 'v1': return 'た';
    case 'v5b': return 'んだ';
    case 'v5g': return 'いだ';
    case 'v5k': return 'いた';
    case 'v5m': return 'んだ';
    case 'v5n': return 'んだ';
    case 'v5r': return 'った';
    case 'v5s': return 'した';
    case 'v5t': return 'った';
    case 'v5u': return 'った';
    case 'vs-s': return 'した';
    default: return '';
  }
}

function baFormEnding(verbType) {
  switch(verbType) {
    case 'v1': return 'れば';
    case 'vs-s': return 'すれば';
    default: return 'ば';
  }
}

function passiveStem(verbType) {
  switch(verbType) {
    case 'v1': return 'られ';
    case 'vs-s': return 'され';
    default: return 'れ';
  }
}

function causativeStem(verbType) {
  switch(verbType) {
    case 'v1': return 'させ';
    case 'vs-s': return 'させ';
    default: return 'せ';
  }
}

function potentialStem(verbType) {
  switch(verbType) {
    case 'v1': return 'られ';
    case 'vs-s': return 'でき';
    default: return '';
  }
}

function examineVerb(j,compound,stem,verbType,iteration) {
  //alert("examineVerb(): compound="+compound+" stem="+stem+" verbType="+verbType+" iteration="+iteration);
  var result=-1;

  switch(compound) {
    case stem+godanConnector(verbType,'う'): result=j; break;

    case stem+godanConnector(verbType,'い')+'ます': result=j; break;
    case stem+godanConnector(verbType,'い')+'まして': result=j; break;
    case stem+godanConnector(verbType,'い')+'ました': result=j; break;
    case stem+godanConnector(verbType,'い')+'ません': result=j; break;
    case stem+godanConnector(verbType,'い')+'ましょう': result=j; break;
    case stem+godanConnector(verbType,'い')+'ながら': result=j; break;
    case stem+godanConnector(verbType,'い'): result=j; break;  // -masu stem

    //case stem+godanConnector(verbType,'あ')+'ない': result=j; break;
    case stem+godanConnector(verbType,'あ')+'ないで': result=j; break;
    //case stem+godanConnector(verbType,'あ')+'なく': result=j; break;
    //case stem+godanConnector(verbType,'あ')+'なくて': result=j; break;
    //case stem+godanConnector(verbType,'あ')+'なければ': result=j; break;
    case stem+godanConnector(verbType,'あ')+'ぬ': result=j; break;
    case stem+godanConnector(verbType,'あ')+'ずに': result=j; break;
    case stem+godanConnector(verbType,'あ')+'ず': result=j; break;
    case stem+godanConnector(verbType,'あ')+'ざる': result=j; break;

    case stem+teFormEnding(verbType): result=j; break;
    case stem+taFormEnding(verbType): result=j; break;

    case stem+taFormEnding(verbType)+'ら': result=j; break;

    case stem+godanConnector(verbType,'え')+baFormEnding(verbType): result=j; break;

    case stem+godanConnector(verbType,'お')+'う': result=j; break;
  }
  if(result!=-1) return result;

  //---- -tai adjectival endings
  result=examineAdj(j,compound,stem+godanConnector(verbType,'い')+'た');
  if(result!=-1) return result;

  //---- -nai adjectival endings
  result=examineAdj(j,compound,stem+godanConnector(verbType,'あ')+'な');
  if(result!=-1) return result;

  if(iteration==1) {
    result=examineVerb(j,compound,stem+godanConnector(verbType,'あ')+passiveStem(verbType),'v1',2);
    if(result!=-1) return result;

    result=examineVerb(j,compound,stem+godanConnector(verbType,'あ')+causativeStem(verbType),'v1',2);
    if(result!=-1) return result;

    result=examineVerb(j,compound,stem+godanConnector(verbType,'え')+potentialStem(verbType),'v1',2);
    if(result!=-1) return result;
  }

  return result;
}

function examineAdj(j,compound,stem) {
  var result=-1;

  switch(compound) {
    case stem: result=j; break;
    case stem+'い': result=j; break;
    case stem+'く': result=j; break;
    case stem+'くて': result=j; break;
    case stem+'かった': result=j; break;
    case stem+'ければ': result=j; break;

    case stem+'くない': result=j; break;
    case stem+'くなく': result=j; break;
    case stem+'くなくて': result=j; break;
    case stem+'くなかった': result=j; break;
    case stem+'くなければ': result=j; break;

    case stem+'み': result=j; break;
    case stem+'さ': result=j; break;
    case stem+'げ': result=j; break;
  }
  if(result!=-1) return result;

  return result;
}

//============================================================================

//---- Find meaning of compound from dictionary arrays
function getMeaning(i) {
  var result=-1;
  var j;

  for(j=0; j<dic.length; j++) {
    if(dic.word[j]==compound[i] && dic.reading[j]==reading[i]) {
      //result=dic.word[j]+'&nbsp;'+dic.meaning[j];
      result=j;
      break;
    }
  }
  if(result!=-1) return result;

  for(j=0; j<dic.length; j++) {
    if((dic.word[j]=='～'+compound[i]  && dic.reading[j]=='～'+reading[i]) ||
       (dic.word[j]==compound[i]+'～' && dic.reading[j]==reading[i]+'～')) {
      //result=dic.word[j]+'&nbsp;'+dic.meaning[j];
      result=j;
      break;
    }
  }
  if(result!=-1) return result;

  var stem;
  var verbType;
  for(j=0; j<dic.length; j++) {

    if(dic.word[j].substr(0,1)==compound[i].substr(0,1) && dic.reading[j].substr(0,1)==reading[i].substr(0,1)) {

      verbType=dic.meaning[j].replace(/^[^v]*(v[15][bgkmnrstu]?)?.*$/, "$1");
      if(dic.meaning[j].match(/vs-s/)) verbType='vs-s';

      if(verbType!='') {
        //alert("compound="+compound[i]+" dic1="+dic1[j]+" dic4="+dic4[j]+" verbType="+verbType);
        stem=dic.word[j].substr(0,dic.word[j].length-1);
        if(verbType=='vs-s') stem=stem.substr(0,stem.length-1);
        result=examineVerb(j,compound[i],stem,verbType,1);

      } else if(dic.meaning[j].match(/adj[^-]/)) {
        stem=dic.word[j].substr(0,dic.word[j].length-1);
        //alert("i-Adj: compound="+compound[i]+" dic.word="+dic.word[j]+" dic.meaning="+dic.meaning[j]+" stem="+stem);
        result=examineAdj(j,compound[i],stem);
      }

    }
    if(result!=-1) break;
  }
  return result;
}
