import 'package:flutter/material.dart';
import 'package:flutter_app/app/components/row/row.dart';

class App extends StatefulWidget {
  const App({super.key});

  @override
  AppState createState() => AppState();
}

class AppState extends State<App> {
  int count = 0;
  String mytext = '';

  @override
  void initState() {
    super.initState();
  }

  // This function simulates useEffect with dependency on 'count'
  @override
  void didUpdateWidget(covariant App oldWidget) {
    super.didUpdateWidget(oldWidget);
    print('State Changed');
  }

  // Function to increase the count
  void increaseCount() {
    setState(() {
      count += 1; // Increase count by 1
    });
  }

  void setmytext(String value) => setState(() => mytext = value);

  // Function to render the list of rows dynamically based on 'count'
  List<Widget> renderRows() {
    List<Widget> rows = [];
    for (int i = 0; i < count; i++) {
      rows.add(RowWidget(id: i)); // Adding RowWidget dynamically like in React
    }
    return rows;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Counter'),
      ),
      body: Column(
        children: [
          TextField(
            onChanged: (value) => setmytext(value),
            decoration: InputDecoration(
              labelText: 'Enter some text',
              border: OutlineInputBorder(),
            ),
          ),
          // Rendering the rows
          Expanded(
            child: ListView(
              children: renderRows(),
            ),
          ),
          // A button equivalent to 'Click Me' div in React
          GestureDetector(
            onTap: increaseCount, // Trigger the increase count function
            child: Container(
              height: 100,
              width: 100,
              color: Colors.yellow,
              alignment: Alignment.center,
              child: const Text(
                'Click Me',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
