package main

import "strconv"

type node struct {
	value int
	left  *node
	right *node
}

func (n node) String() string {
	return strconv.Itoa(n.value)
}
