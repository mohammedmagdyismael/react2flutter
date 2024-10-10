import 'package:flutter/material.dart';

// Creating a StatelessWidget equivalent to the React component
class RowWidget extends StatelessWidget {
  // Defining a final variable to hold the id (similar to props in React)
  final int id;

  // Constructor to initialize the id
  const RowWidget({super.key, required this.id});

  @override
  Widget build(BuildContext context) {
    return Container(
      key: ValueKey(id), // Equivalent to React's key={id}
      padding: const EdgeInsets.all(8.0), // Optional padding
      child: Text(
        'Row Number $id', // Equivalent to {`Row Number ${id}`}
        style: const TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }
}
