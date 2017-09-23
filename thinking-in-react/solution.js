import React from 'react'

    export const FilterableProductTable = React.createClass({
        render() {
            return (
                <div></div>
            )
        }
    })

    export const SearchBar = React.createClass({
      render() {
          return (
              <div><input type={Text} placeholder={"Search..."} /></div>
          )
      }
  })

  export const ProductTable = React.createClass({
    render() {
        return (
            <div>
              <ProductCategoryRow />
              <ProductRow />
            </div>
        )
    }
})


export const ProductCategoryRow = React.createClass({
  render() {
      return (
          <div></div>
      )
  }
})

export const ProductRow = React.createClass({
  render() {
      return (
          <div></div>
      )
  }
})