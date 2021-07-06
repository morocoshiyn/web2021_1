const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let schema = `
create table test(
  id integer primary key,
  name text not null,
  variety text not null,
  attribute text not null,
  type text not null,
  level integer,
  rank integer,
  attack integer not null,
  defense integer not null
);
`

db.serialize( () => {
	db.run( schema, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "テーブルを作成しました" );
	});
});
