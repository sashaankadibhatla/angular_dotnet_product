using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace GroupData.Models{
    
    public class Product_Info{
        [Key]
        [Required]
        [Range(0,999)]
        public int Id{get;set;}
        [Range(0,999)]
        public int group_Id{get;set;}
        [StringLength(1000)]
        public string name{get;set;}
        [StringLength(1000)]
        public string description{get;set;}
        [Range(0,9999)]
        public int rate{get;set;}

    }
}